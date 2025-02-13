import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';
@Injectable()
export class QrService {
  async generateCode(data: string): Promise<string> {
    try {
      const QrCodeUrl = await qrcode.toDataURL(data);
      return QrCodeUrl;
    } catch (err) {
      throw new Error('Failed to generate QR code.');
    }
  }
}
