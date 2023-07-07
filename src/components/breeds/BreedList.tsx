import * as React from "react";
import { graphql, Link } from "gatsby";
import Grid from "../ui/Grid";
import Card from "../ui/Card";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { space } from "../layout/theme"

export type BreedListProps = {
    breeds: readonly BreedListItemProps[]
};
export type BreedListItemProps = Queries.BreedListItemFragment;

export default function BreedList(props: BreedListProps) {
    const { breeds } = props;
    return <Grid columnWidth="300px" gap={space[3]}>
        {breeds.map((breed) => <BreedListItem key={breed.slug} {...breed} />)}
    </Grid>;
}

export function BreedListItem(props: BreedListItemProps) {
    const description = JSON.parse(props.description.raw);

    const image = props.photo.url + '?w=300&h=300&fm=png&fit=fill&f=face';

    return <Card 
        title={props.name}
        to={'/breed/' + props.slug}
        image={image}
    >
        {documentToReactComponents(description)}
    </Card>
}

export const BreedListItemFragment = graphql`
    fragment BreedListItem on ContentfulBreed {
        name
        slug
        description {
            raw
        }
        photo {
            url
            alt
        }
    }
`;
