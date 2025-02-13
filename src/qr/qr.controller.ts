import { Controller, Get, Query } from '@nestjs/common';
import { QrService } from './qr.service';

@Controller('qr')
export class QrController {
  constructor(private readonly qrCodeService: QrService) {}

  @Get()
  async generateQrCode(@Query('data') data: string) {
    const qrCodeDataURL = await this.qrCodeService.generateCode(data);
    return `<img src="${qrCodeDataURL}" alt="QR Code" />`;
  }
}
