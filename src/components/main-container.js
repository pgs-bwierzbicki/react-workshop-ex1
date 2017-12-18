import React from 'react';
import Post1 from './post1';
import Post2 from './post2';
import Post3 from './post3';
import Pagination from './pagination';
import Aside from './aside';

const Main = () => {
    return (
        <main role="main" class="container">
            <div class="row">
                <div class="col-sm-8 blog-main">
                    <Post1 />
                    <Post2 />
                    <Post3 />
                    <Pagination />
                </div>
                <Aside></Aside>
            </div>

        </main>
);
};

export default Main;