
type TokenObtainPairOutputSchema = {
  username: string
  refresh: string
  access: string

}

type TokenObtainPairInputSchema = {
  password: string
  username: string
}

type TokenRefreshOutputSchema = {
  refresh: string
  access: string | null

}

type TokenRefreshInputSchema = {
  refresh: string

}

type Schema = {

}

type TokenVerifyInputSchema = {
  token: string

}

type GroupOut = {
  id: number
  name: string

}

type UserList = {
  data: []

}

type UserOut = {
  id: number
  uuid: string
  username: string
  email: string
  groups: []

}

type UserIn = {
  username: string
  password: string

}

type UserPut = {
  username: string

}

type UserPutPassword = {
  password: string

}

type UserGroup = {
  id: number

}

type GroupList = {
  data: []

}

type GroupIn = {
  name: string

}

type GroupPut = {
  name: string

}

type TransactionList = {
  data: []

}

type TransactionOut = {
  uuid: string
  user_uuid: string
  datetime: string
  label: string
  price: number

}

type TransactionIn = {
  datetime: string
  label: string
  price: number

}

type ToDoList = {
  data: []

}

type ToDoOut = {
  uuid: string
  user_uuid: string
  datetime: string
  label: string
  done: boolean

}

type ToDoIn = {
  datetime: string
  label: string

}

type ToDoDone = {
  done: boolean

}
