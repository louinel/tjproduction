import React from 'react';
import SEO from '../common/seo';
import Home from '../components/home';
import Wrapper from "../layout/wrapper"

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"TJ Production - Creative Design Solutions for Your Business"} />
            <Home />
        </Wrapper>
    );
};

export default index;