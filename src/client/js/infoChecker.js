async function checkForInfo(data) {
    try {
        const postData = await fetch('/userInput', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            // Body data type must match "Content-Type" header 
            body: JSON.stringify(data),
        });

        const newData = await postData.json();
        console.log(newData);
        // Client.updateUI(newData);

    } catch (error) {
        console.log("HELLOOOOO THIS IS AN ERROR");
        console.log(error);
    }
}

export { checkForInfo } 
