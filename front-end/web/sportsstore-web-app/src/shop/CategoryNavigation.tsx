import * as React from "react"
import { Link } from "react-router-dom"

export const CategoryNavigation = (props: {
    baseUrl: string,
    categories: string[],
}) =>
    <>
        <Link className="btn btn-secondary btn-block" to={props.baseUrl}>
            All
        </Link>
        {props.categories && props.categories.map(category =>
            <Link key={category} className="btn btn-secondary btn-block"
                  to={`${props.baseUrl}/${category.toLowerCase()}`}>
                {category}
            </Link>
        )}
    </>