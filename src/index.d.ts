import type { APIGatewayProxyEvent, Context } from 'aws-lambda';

export function context<T extends Context>(): T;

export function event<T extends APIGatewayProxyEvent>(): T;
