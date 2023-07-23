const todoController = (function(){
    // Private methods and variables
    const baseUrl = 'http://myproject.local/simple-todo';

    // Public methods and variables
    return {
        fetchAll: async function(){
            try {
                const request = await fetch(this.baseUrl + '/api/todos',{
                    method: 'GET',
                    headers: {
                        'Accept': 'json'
                    }
                });
                const response = await request.json();
                return response;
            } catch (error) {
                console.log(error);
            }
        },
        create: async function(todo){
            try {
                const request = await fetch(baseUrl + '/api/todos', {
                    method: 'POST',
                    headers: {
                        'Accept': 'json'
                    },
                    body: JSON.stringify(todo)
                });
                
                const response = await request.json();
                
                if(response.type == 'error'){
                    throw new Error(response.data.message);
                }

                console.log(response);
                // handle state changes
            } catch (error) {
                console.log(error);
            }
        }
    };
})();

export default todoController;