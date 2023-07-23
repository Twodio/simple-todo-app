const authController = (function(){
    async function findUserByUsername(username){

    }

    async function validatePassword(username, password){
        return username && username.password == password;
    }

    function setAuthToken(token){
        localStorage.setItem('authToken', token);
    }

    function getAuthToken(){
        return localStorage.getItem('authToken');
    }

    function clearAuthToken(){
        localStorage.removeItem('authToken');
    }

    return {
        login: async function(username, password){
            const user = await findUserByUsername(username);

            if(user == null) return false;

            const isPasswordValid = await validatePassword(username, password);

            if(!isPasswordValid) return false;

            setAuthToken('random token');

            return true;
        },
        register: async function(username, password){

        },
        logout: function(){
            clearAuthToken();
        },
        isLoggedIn: function(){
            const authToken = getAuthToken();
            return authToken !== null;
        },
        getCurrentUser: function(){
            const authToken = getAuthToken();
            if(authToken){
                return {

                };
            }
            return null;
        }
    }
})();

export default authController;