import { ApiProperty } from '@nestjs/swagger';

export class CreateApi1Dto {
    @ApiProperty({ description: 'code', required: true, example: '1' })
    code: string;
    @ApiProperty({ description: 'name', required: true, example: 'test1' })
    name: string;
}
