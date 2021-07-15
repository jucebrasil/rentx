import { Response, Request, response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {

  constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

  handle(request: Request, reponse: Response): Response {
    const { name, description } = request.body;


    this.createCategoryUseCase.execute({ name, description });


    return response.status(201).send();
  }
}
export { CreateCategoryController };