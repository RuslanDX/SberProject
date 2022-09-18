// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import {useMemo} from "react";

export const useSortedPosts = (posts: any, sort: any) => {
    const sortedPosts = useMemo(() => {
        if(sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = (posts: any, sort: any, query: any) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post: any) => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}
