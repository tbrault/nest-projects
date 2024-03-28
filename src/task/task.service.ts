import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.tasksRepository.save(createTaskDto);
  }

  async findAll() {
    return await this.tasksRepository.find();
  }

  async findOne(id: number) {
    return await this.tasksRepository.findOneBy({ id });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.tasksRepository.update(id, updateTaskDto);
  }

  async remove(id: number) {
    return await this.tasksRepository.delete(id);
  }

  async removeAll() {
    return await this.tasksRepository.clear();
  }
}
