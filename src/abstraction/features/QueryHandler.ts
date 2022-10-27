abstract class QueryHandler<TResult, TQuery> {
  abstract HandleAsync(query: TQuery): Promise<TResult>;
}

export default QueryHandler;
