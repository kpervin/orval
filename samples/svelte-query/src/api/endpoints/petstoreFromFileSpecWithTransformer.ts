/*
 * Generated by orval v5.3.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions
} from '@sveltestack/svelte-query'
import type {
  Pets,
  ListPetsParams,
  CreatePetsBody,
  Pet
} from '../model'
import { customInstance } from '../mutator/custom-instance'

type AsyncReturnType<
  T extends (...args: any) => Promise<any>
  > = T extends (...args: any) => Promise<infer R> ? R : any;


  type SecondParameter<T extends (...args: any) => any> = T extends (
    config: any,
    args: infer P,
  ) => any
    ? P extends unknown
    ? Record<string, any>
    : P
    : never;

export const listPets = <Data = unknown>(
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
  

export const getListPetsQueryKey = (params?: ListPetsParams,
    version= 1,) => [`/v${version}/pets`, ...(params ? [params]: [])]

      
export const useListPets = <
  Data extends unknown = unknown,
  Error extends unknown = unknown
>(
 params?: ListPetsParams,
    version= 1, options?: { query?:UseQueryOptions<AsyncReturnType<typeof listPets>, Error>, request?: SecondParameter<typeof customInstance>}

  ) => {
  const queryKey = getListPetsQueryKey(params,version);
  const {query: queryOptions, request: requestOptions} = options || {}

  const query = useQuery<AsyncReturnType<typeof listPets>, Error>(queryKey, () => listPets<Data>(params,version, requestOptions), {enabled: !!(version), ...queryOptions} )

  return {
    queryKey,
    ...query
  }
}

  export const createPets = <Data = unknown>(
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
  


      export const useCreatePets = <
        Data extends unknown = unknown,
        Error extends unknown = unknown
      >(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof createPets>, Error, {data: CreatePetsBody;version?: number}, unknown>, request?: SecondParameter<typeof customInstance>}
) => {
        const {mutation: mutationOptions, request: requestOptions} = options || {}

        return useMutation<AsyncReturnType<typeof createPets>, Error, {data: CreatePetsBody;version?: number}>((props) => {
          const {data,version} = props || {};

          return  createPets<Data>(data,version,requestOptions)
        }, mutationOptions)
      }
      export const showPetById = <Data = unknown>(
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
  

export const getShowPetByIdQueryKey = (petId: string,
    version= 1,) => [`/v${version}/pets/${petId}`]

      
export const useShowPetById = <
  Data extends unknown = unknown,
  Error extends unknown = unknown
>(
 petId: string,
    version= 1, options?: { query?:UseQueryOptions<AsyncReturnType<typeof showPetById>, Error>, request?: SecondParameter<typeof customInstance>}

  ) => {
  const queryKey = getShowPetByIdQueryKey(petId,version);
  const {query: queryOptions, request: requestOptions} = options || {}

  const query = useQuery<AsyncReturnType<typeof showPetById>, Error>(queryKey, () => showPetById<Data>(petId,version, requestOptions), {enabled: !!(version && petId), ...queryOptions} )

  return {
    queryKey,
    ...query
  }
}

  