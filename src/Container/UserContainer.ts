import { Container as ContainerINV } from 'inversify';
import { UserRepository } from '../Infrastructure/Repository/UserRepository';
import { AuthenticationContainer } from './AuthenticationContainer';
import { TYPES } from './TYPES';

const Container = new ContainerINV();

//Infrastructure
Container.bind(TYPES.UserRepository).to(UserRepository).inSingletonScope();


//Dependencies
export const UserContainer = ContainerINV.merge(AuthenticationContainer, Container);