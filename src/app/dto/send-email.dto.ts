interface SendEmailInterface {
  fullName: string;
  email: string;
  message: string;
}

export interface FormState {
  success: boolean;
  message?: string;
  errors?: {
    fullName?: string;
    email?: string;
    message?: string;
  };
}

export class SendEmailDto {
  static checkEmailData({ fullName, email, message }: SendEmailInterface) {
    const errors: { [key: string]: string } = {};

    // Validar nombre completo
    if (!fullName || fullName.trim().length === 0) {
      errors.fullName =
        'El nombre es requerido y debe tener al menos 5 caracteres';
    } else if (fullName.trim().length < 4) {
      errors.fullName = 'El nombre debe tener al menos 4 caracteres';
    }

    // Validar email
    if (!email || email.trim().length === 0) {
      errors.email = 'El email es requerido';
    } else {
      // Validación básica de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = 'El email no es válido';
      }
    }

    // Validar mensaje
    if (!message || message.trim().length === 0) {
      errors.message = 'El mensaje es requerido';
    } else if (message.trim().length < 10) {
      errors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    return Object.keys(errors).length > 0 ? errors : null;
  }
}
