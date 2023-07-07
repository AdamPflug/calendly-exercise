import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../../components/layout/layout";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type BreedIndexProps = PageProps<Queries.BreedIndexQuery>;

export default function (props: BreedIndexProps) {
    const breeds = props.data.breeds.nodes;
    return <Layout>
        <h1>Breeds</h1>
        <ul>
            {breeds.map((breed) => <li><a href={breed.slug}>
                <img src={breed.photo.url + '?w=100&h=100&fm=png&fit=fill&f=face'} alt={breed.photo.alt} />
                <div>{breed.name}</div>
            </a></li>)}
        </ul>
    </Layout>;
}

export const query = graphql`
    query BreedIndex {
        breeds: allContentfulBreed {
            nodes {
                name,
                slug
                photo {
                    url
                    alt
                }
            }
        }
    }
`
