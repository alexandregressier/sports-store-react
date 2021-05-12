import * as React from "react"
import { ToggleLink } from "../ToggleLink"

export const CategoryNavigation = (props: {
    baseUrl: string,
    categories: string[],
}) =>
    <>
        <ToggleLink to={props.baseUrl} exact={true}>
            All
        </ToggleLink>
        {props.categories && props.categories.map(category =>
            <ToggleLink key={category} to={`${props.baseUrl}/${category.toLowerCase()}`}>
                {category}
            </ToggleLink>
        )}
    </>