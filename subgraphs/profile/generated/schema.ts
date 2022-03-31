// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class Team extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Team entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Team entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Team", id.toString(), this);
  }

  static load(id: string): Team | null {
    return store.get("Team", id) as Team | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get isJoinable(): boolean {
    let value = this.get("isJoinable");
    return value.toBoolean();
  }

  set isJoinable(value: boolean) {
    this.set("isJoinable", Value.fromBoolean(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get totalUsers(): BigInt {
    let value = this.get("totalUsers");
    return value.toBigInt();
  }

  set totalUsers(value: BigInt) {
    this.set("totalUsers", Value.fromBigInt(value));
  }

  get users(): Array<string> {
    let value = this.get("users");
    return value.toStringArray();
  }

  set users(value: Array<string>) {
    this.set("users", Value.fromStringArray(value));
  }

  get totalPoints(): BigInt {
    let value = this.get("totalPoints");
    return value.toBigInt();
  }

  set totalPoints(value: BigInt) {
    this.set("totalPoints", Value.fromBigInt(value));
  }

  get points(): Array<string> {
    let value = this.get("points");
    return value.toStringArray();
  }

  set points(value: Array<string>) {
    this.set("points", Value.fromStringArray(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get isActive(): boolean {
    let value = this.get("isActive");
    return value.toBoolean();
  }

  set isActive(value: boolean) {
    this.set("isActive", Value.fromBoolean(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get team(): string {
    let value = this.get("team");
    return value.toString();
  }

  set team(value: string) {
    this.set("team", Value.fromString(value));
  }

  get totalPoints(): BigInt {
    let value = this.get("totalPoints");
    return value.toBigInt();
  }

  set totalPoints(value: BigInt) {
    this.set("totalPoints", Value.fromBigInt(value));
  }

  get points(): Array<string> {
    let value = this.get("points");
    return value.toStringArray();
  }

  set points(value: Array<string>) {
    this.set("points", Value.fromStringArray(value));
  }
}

export class Point extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Point entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Point entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Point", id.toString(), this);
  }

  static load(id: string): Point | null {
    return store.get("Point", id) as Point | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get team(): string | null {
    let value = this.get("team");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set team(value: string | null) {
    if (value === null) {
      this.unset("team");
    } else {
      this.set("team", Value.fromString(value as string));
    }
  }

  get user(): string | null {
    let value = this.get("user");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set user(value: string | null) {
    if (value === null) {
      this.unset("user");
    } else {
      this.set("user", Value.fromString(value as string));
    }
  }

  get points(): BigInt {
    let value = this.get("points");
    return value.toBigInt();
  }

  set points(value: BigInt) {
    this.set("points", Value.fromBigInt(value));
  }

  get campaignId(): BigInt {
    let value = this.get("campaignId");
    return value.toBigInt();
  }

  set campaignId(value: BigInt) {
    this.set("campaignId", Value.fromBigInt(value));
  }

  get hash(): Bytes {
    let value = this.get("hash");
    return value.toBytes();
  }

  set hash(value: Bytes) {
    this.set("hash", Value.fromBytes(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}