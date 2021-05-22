/*
 * Generated by orval v5.3.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type {
  Pets,
  ListPetsParams,
  CreatePetsBody,
  Pet
} from '../model'
import { customInstance } from '../mutator/custom-instance'

type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;


  export const getSwaggerPetstore = () => {
const listPets = <Data = unknown>(
    params?: ListPetsParams,
    version= 1,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<Data extends unknown ? Pets : Data>(
      {url: `/v${version}/pets`, method: 'get',
        params,
    },
      // eslint-disable-next-line
// @ts-ignore
 options);
    }
  const createPets = <Data = unknown>(
    createPetsBody: CreatePetsBody,
    version= 1,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<Data extends unknown ? unknown : Data>(
      {url: `/v${version}/pets`, method: 'post',
      data: createPetsBody
    },
      // eslint-disable-next-line
// @ts-ignore
 options);
    }
  const showPetById = <Data = unknown>(
    petId: string,
    version= 1,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<Data extends unknown ? Pet : Data>(
      {url: `/v${version}/pets/${petId}`, method: 'get'
    },
      // eslint-disable-next-line
// @ts-ignore
 options);
    }
  return {listPets,createPets,showPetById}};
