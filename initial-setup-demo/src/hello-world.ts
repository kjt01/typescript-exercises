class HelloWorld {
    static hello(message?: string) {
        if(message) {
            return "Hello, " + message + "!";
        }
        return "Hello, World!";
    }
}

export default HelloWorld;