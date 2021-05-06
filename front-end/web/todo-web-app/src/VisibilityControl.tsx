import React from "react"

export const VisibilityControl = (props: {
    description: string,
    isChecked: boolean,
    onChange: (isChecked: boolean) => void,
}) =>
    <div className="form-check">
        <input type="checkbox" className="form-check-input" checked={props.isChecked}
               onChange={e => props.onChange(e.target.checked)}/>
        <label className="form-check-label">Show {props.description}</label>
    </div>