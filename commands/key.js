const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const {isRequired} = require('../utils/validation')

const key = {
    async set(){
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type : "input",
                name : "key",
                message : "Enter API key".green + 'https://nomics.com',
                validate : isRequired
            }
        ])

        const key = keyManager.setKey(input.key);
        
        if(key){
            console.log("API Key Set".blue)
        }
    },
    show(){
        console.log('Hello from Show');
        const keyManager = new KeyManager;
        try {
            const key = keyManager.getKey();
            console.log('Current API Key ' , key.yellow)
        } catch (error) {
            console.log(error.message.red)
        }
    },
    remove(){
        console.log('Hello from Remove');
        const keyManager = new KeyManager;
        try {
            const key = keyManager.deleteKey();
            console.log('Key Removed'.blue);
        } catch (error) {
            console.log(error.message.red);
        }
    }
}

module.exports = key