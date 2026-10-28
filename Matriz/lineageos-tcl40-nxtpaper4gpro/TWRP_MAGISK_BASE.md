# Guia base: TWRP e Magisk (uso por conta e risco)

> Aviso: desbloquear bootloader, instalar recovery custom e root pode invalidar garantia, apagar dados e reduzir compatibilidade com apps sensíveis.

## Pré-requisitos

- Backup completo dos dados
- Drivers/ADB/Fastboot instalados
- Bootloader desbloqueado oficialmente
- Imagens corretas para o modelo exato do aparelho

## Fluxo base (alto nível)

1. Confirmar identificação exata do dispositivo e variante
2. Reiniciar em fastboot
3. Inicializar/instalar recovery TWRP compatível
4. Fazer backup das partições críticas no recovery
5. Instalar Magisk conforme método suportado para a versão do aparelho/boot image
6. Reiniciar e validar boot do sistema

## Validação mínima pós-instalação

- Sistema inicia sem bootloop
- Rádio, Wi-Fi, Bluetooth e câmera operam
- Recovery permanece acessível
- Logs de erro capturados para diagnóstico

## Conformidade e integridade

Este guia não cobre técnicas de bypass de proteção de aplicativos. Para máxima compatibilidade com apps que exigem integridade forte, use ROM/firmware oficial sem root e com bootloader bloqueado.
