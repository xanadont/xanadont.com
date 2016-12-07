import * as React from "react";
import * as ReactDom from "react-dom";
import { Blog } from "./components/Blog";

ReactDom.render(
    <Blog />,
    document.getElementById('blog')
);