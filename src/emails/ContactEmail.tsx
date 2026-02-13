import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
  fullName: string;
  email: string;
  message: string;
}

export const ContactEmail = ({ fullName, email, message }: ContactEmailProps) => {
  const formattedDate = new Date().toLocaleString('es-ES', {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje de contacto de {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Logo */}
          <Section style={logoSection}>
            <Img
              src={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://moilab.es'}/img/logos/moilab-logo.png`}
              width="200"
              height="auto"
              alt="Moilab"
              style={logo}
            />
          </Section>

          {/* Título */}
          <Heading style={h1}>Nuevo mensaje de contacto</Heading>

          {/* Información del contacto */}
          <Section style={infoBox}>
            <Heading as="h2" style={h2}>
              Información del contacto
            </Heading>
            <Text style={text}>
              <strong>Nombre:</strong> {fullName}
            </Text>
            <Text style={text}>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${email}`} style={link}>
                {email}
              </a>
            </Text>
          </Section>

          {/* Mensaje */}
          <Section style={messageBox}>
            <Heading as="h2" style={h2}>
              Mensaje
            </Heading>
            <Text style={messageText}>{message}</Text>
          </Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              Este mensaje fue enviado desde el formulario de contacto de Moilab.
            </Text>
            <Text style={footerText}>{formattedDate}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

ContactEmail.PreviewProps = {
  fullName: 'Juan Pérez',
  email: 'juan@ejemplo.com',
  message: 'Hola, me gustaría saber más sobre sus servicios de desarrollo web.',
} as ContactEmailProps;

export default ContactEmail;

// Estilos
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  marginBottom: '64px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
  maxWidth: '600px',
};

const logoSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const logo = {
  margin: '0 auto',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '28px',
  fontWeight: '700',
  margin: '0 0 24px',
  padding: '0',
  textAlign: 'center' as const,
};

const h2 = {
  color: '#333333',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 12px',
  padding: '0',
};

const text = {
  color: '#333333',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '8px 0',
};

const messageText = {
  color: '#333333',
  fontSize: '15px',
  lineHeight: '1.7',
  margin: '0',
  //whiteSpace: 'pre-wrap' as const,
};

const link = {
  color: '#3b82f6',
  textDecoration: 'none',
};

const infoBox = {
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  padding: '24px',
  marginBottom: '20px',
  border: '1px solid #e2e8f0',
};

const messageBox = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '24px',
  marginBottom: '20px',
  border: '1px solid #e2e8f0',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '32px 0',
};

const footer = {
  textAlign: 'center' as const,
};

const footerText = {
  color: '#8898aa',
  fontSize: '13px',
  lineHeight: '1.5',
  margin: '4px 0',
};
