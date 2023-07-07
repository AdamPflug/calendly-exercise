import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../../components/layout/layout";

import TitleHero from "../../components/ui/TitleHero";
import BreedDetails from "../../components/breeds/BreedDetails";

type BreedPageProps = PageProps<Queries.BreedPageQuery>;

export default function (props: BreedPageProps) {
    const breed = props.data.breed;
    const photo = breed.photo.url + '?w=1248&h=500&fm=png&fit=fill&f=face';


    return <Layout>
        <TitleHero image={photo}>
            <h1>{breed.name}</h1>
        </TitleHero>
        <BreedDetails {...breed} />
    </Layout>;
}

export const query = graphql`
    query BreedPage($slug: String!) {
        breed: contentfulBreed(slug: { eq: $slug }) {
            name,
            photo {
                url
                alt
            }
            ...BreedDetails
        }
    }
`
