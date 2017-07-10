export default class ErrorService {
    log(error) {
        console.log(error);
    }
}

export const errorService = new ErrorService();