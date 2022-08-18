const NotFound = () => {
    const path = window.location.href;
    const url = path.substring(path.lastIndexOf("/") + 1);
    return (
        <div> siden {url} 404 - Notfound</div>
    );
}

export default NotFound;
