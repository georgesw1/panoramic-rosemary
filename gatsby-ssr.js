/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const safePrefix = require("./src/utils/safePrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src="https://cdn.jsdelivr.net/gh/tunguskha/Image-shadow@latest/assets/js/image-shadow.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jets/0.14.1/jets.min.js" />
            <script src={safePrefix('assets/js/main.js')}/>
            
        </React.Fragment>
    ]);

};
