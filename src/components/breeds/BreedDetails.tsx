import * as React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { space } from "../layout/theme"
import styled from "styled-components";

export type BreedDetailsProps = Queries.BreedDetailsFragment;

export default function BreedDetails(props: BreedDetailsProps) {
    const story = JSON.parse(props.story.raw);

    return <DetailsContainer>
        <h2>Facts</h2>
        <p><strong>Country of Origin:</strong> {props.origin}</p>
        {props.lifespanAverage && <p>
            <strong>Lifespan:</strong> {props.lifespanAverage} years - {props.lifespanMaximum} years
        </p>}
        <p><strong>Friendliness:</strong> {props.friendliness}</p>
        <p><strong>Sedding:</strong> {props.shedding}</p>
        
        <h2>Story</h2>
        {documentToReactComponents(story)}
    </DetailsContainer>
}

export const BreedListItemFragment = graphql`
    fragment BreedDetails on ContentfulBreed {
        name,
        slug
        origin
        lifespanAverage
        lifespanMaximum
        friendliness
        shedding
        story {
            raw
        }
    }
`;

const DetailsContainer = styled.article`
    padding-top: ${space[3]};
`
