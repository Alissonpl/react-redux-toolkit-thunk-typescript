import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [InfraModule],
})
export class AuthModule {}
