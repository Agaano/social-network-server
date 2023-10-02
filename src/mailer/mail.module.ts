import { MailerModule } from '@nestjs-modules/mailer'
import { Module } from '@nestjs/common'
import { MailService } from './mail.service'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
				port: 465,
				secure: true,
				auth: {
          type: 'plain',
					user: 'agaanomail@gmail.com',
					pass: 'tvodictnmldwtiom',
				},
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}