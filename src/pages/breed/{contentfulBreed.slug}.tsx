import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../../components/layout/layout";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type BreedPageProps = PageProps<Queries.BreedPageQuery>;

export default function (props: BreedPageProps) {
    const breed = props.data.breed;
    const story = JSON.parse(breed.story.raw);
    return <Layout>
        <p><a href="/">&lt; Home</a></p>
        <img src={breed.photo.url + '?w=800&h=400&fm=png&fit=fill'} alt={breed.photo.alt} />
        <h1>{breed.name}</h1>
        <p><strong>Country of Origin:</strong> {breed.origin}</p>
        {breed.lifespanAverage && <p><strong>Lifespan:</strong> {breed.lifespanAverage} years - {breed.lifespanMaximum} years</p>}
        <p><strong>Friendliness:</strong> {breed.friendliness}</p>
        <p><strong>Amount of shedding:</strong> {breed.shedding}</p>
        <h1>Story</h1>
        {documentToReactComponents(story)}
    </Layout>;
}

export const query = graphql`
    query BreedPage($slug: String!) {
        breed: contentfulBreed(slug: { eq: $slug }) {
            name,
            slug
            origin
            lifespanAverage
            lifespanMaximum
            friendliness
            shedding
            photo {
                url
                alt
            }
            story {
                raw
            }
        }
    }
`
