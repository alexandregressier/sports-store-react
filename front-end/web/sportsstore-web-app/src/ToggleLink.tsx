import * as React from "react"
import { Link, Route } from "react-router-dom"

export const ToggleLink = (props: {
    to: string,
    exact?: boolean,
    className?: string,
    activeClass?: string,
    inActiveClass?: string,
    children: string,
}) =>
    <Route path={props.to} exact={props.exact} children={routeProps => {
        const baseClasses = props.className ?? "m-2 btn btn-block"
        const activeClass = props.activeClass ?? "btn-primary"
        const inActiveClass = props.inActiveClass ?? "btn-secondary"

        return <Link to={props.to} className={`${baseClasses} ${routeProps.match ? activeClass : inActiveClass}`}>
            {props.children}
        </Link>
    }}/>