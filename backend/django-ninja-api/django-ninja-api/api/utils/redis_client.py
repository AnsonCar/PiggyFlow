import redis
import os

REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")

redis_connection_pool = redis.ConnectionPool.from_url(
    REDIS_URL,
    decode_responses=True,
    socket_timeout=5,
    socket_connect_timeout=5,
    retry_on_timeout=True,
)

redis_client = redis.Redis(connection_pool=redis_connection_pool, decode_responses=True)
