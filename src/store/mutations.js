export default{
    changeCity: (state, newCity) => {
        state.city = newCity
        try {
            localStorage.city = newCity

        } catch (error) {
            console.log(error);
        }
    }
}