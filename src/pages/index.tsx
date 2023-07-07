import * as React from "react";
import { graphql, PageProps } from "gatsby";
import BreedList from "../components/breeds/BreedList";
import Layout from "../components/layout/layout";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type BreedIndexProps = PageProps<Queries.BreedIndexQuery>;

export default function (props: BreedIndexProps) {
    const breeds = props.data.breeds.nodes;
    return <Layout>
        <h1>Breeds</h1>
        <BreedList breeds={breeds} />
    </Layout>;
}

export const query = graphql`
    query BreedIndex {
        breeds: allContentfulBreed {
            nodes {
                ...BreedListItem
            }
        }
    }
`
