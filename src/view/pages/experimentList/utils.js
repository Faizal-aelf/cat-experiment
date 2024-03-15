export const sortList = (data) => {
    const formattedData  = data.map(item => {
        console.log()
        const submittedDate =  (typeof item.submittedDate == 'string') ? (new Date(item.submittedDate)).getTime() / 1000 : (new Date(item.submittedDate)).getTime() ;
        return {...item, submittedDate};
    });
    const sortedData = formattedData.sort((a, b) => {
        // Sort in descending order
        return b.submittedDate - a.submittedDate;
    });
    return sortedData;
}