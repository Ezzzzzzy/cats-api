const paginate = (query, { page, pageSize }) => {
    let pageInt = parseInt(page)
    let pageSizeInt = parseInt(pageSize)
    const offset = (pageInt * pageSizeInt) - pageSizeInt;
    const limit = pageSizeInt;

    console.log(offset, 'offset')
    console.log(limit, 'limit')

    return {
        ...query,
        offset,
        limit,
    };
}

export default paginate