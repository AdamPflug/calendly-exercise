import * as React from "react";
import { graphql, Link } from "gatsby";
import Grid from "../ui/Grid";
import Card from "../ui/Card";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export type BreedListProps = {
    breeds: readonly BreedListItemProps[]
};

export default function BreedList(props: BreedListProps) {
    const { breeds } = props;
    return <Grid columnWidth="300px" gap="15px">
        {breeds.map((breed) => <BreedListItem {...breed} />)}
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

export type BreedListItemProps = Queries.BreedListItemFragment;