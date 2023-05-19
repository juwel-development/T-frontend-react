import { Container as ContainerINV } from 'inversify';
import { UserRepository } from '../Infrastructure/Repository/UserRepository';
import { ApplicationContainer } from './ApplicationContainer';
import { TYPES } from './TYPES';

const Container = new ContainerINV();

//Infrastructure
Container.bind(TYPES.UserRepository).to(UserRepository).inSingletonScope();


//Dependencies
export const UserContainer = ContainerINV.merge(ApplicationContainer, Container);