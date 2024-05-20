import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { InternalServerErrorException, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Member } from '../../libs/dto/member/member';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	@Mutation(() => Member)
	public async signup(@Args('input') input: MemberInput): Promise<Member> {
		console.log('Mutation: signup');
		return this.memberService.signup(input);
	}
	@Mutation(() => Member)
	public async login(@Args('input') input: LoginInput): Promise<Member> {
		console.log('Mutation: login');
		return this.memberService.login(input);
	}
	// Authenticated
	@UseGuards(AuthGuard)
	@Mutation(() => String)
	public async updateMember(@AuthMember('_id') memberId: ObjectId): Promise<String> {
		console.log('Mutation: updateMember');
		console.log(memberId);
		return this.memberService.updateMember();
	}
	@UseGuards(AuthGuard)
	@Query(() => String)
	public async checkAuth(@AuthMember('memberNick') memberNick: string): Promise<String> {
		console.log('Mutation: checkAuth');
		console.log('memberNick', memberNick);
		return `hi ${memberNick}`;
	}
	@Query(() => String)
	public async getMember(): Promise<string> {
		console.log('Query: getMember');
		return this.memberService.getMember();
	}

	/* ADMIN */

	// Authorithation : ADMIN
	@Mutation(() => String)
	public async C(): Promise<string> {
		return this.memberService.getAllMembersByAdmin();
	}

	// Authorithation : ADMIN
	@Mutation(() => String)
	public async updateMemberByAdmin(): Promise<string> {
		console.log('Mutation: updateMemberByAdmin ');
		return this.memberService.updateMemberByAdmin();
	}
}
