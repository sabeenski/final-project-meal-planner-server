import { JsonController,/* Post, Body, BadRequestError, Authorized*/ Get, Param } from 'routing-controllers'
import Unit from './entity';


@JsonController()
export default class UnitController {

  
  @Get('/units/:id([0-9]+)')
  getUser(
    @Param('id') id: number
  ) {
    return Unit.findOne(id)
  }


  @Get('/units')
  getAllUnits() {
    return Unit.find()
  }
}