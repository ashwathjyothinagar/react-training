function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName : 'Harper',
    lastName : 'Parez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

function DispalyName(){
 return element;
}

export default DispalyName;