import Joi from "joi";
import { ITestBodyRequest } from "../../dto/requests/VersionControllerRequests";

const ITestBodyRequestSchema = Joi.object<ITestBodyRequest>({
    TestNumber: Joi.number().required().negative(),
    TestString: Joi.string().required().max(5)
});

export {ITestBodyRequestSchema}