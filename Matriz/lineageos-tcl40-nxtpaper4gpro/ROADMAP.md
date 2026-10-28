# Roadmap do Projeto

## Fase 1 — Descoberta técnica

- Levantar SoC, partições, kernel base e blobs proprietários
- Reunir firmware stock e fontes GPL disponíveis
- Mapear comportamento do botão NXTINK no sistema original

## Fase 2 — Bring-up inicial do LineageOS

- Criar/ajustar `device tree`, `vendor tree` e `kernel config`
- Obter boot estável com logs utilizáveis
- Validar componentes críticos (RIL, Wi-Fi, BT, áudio)

## Fase 3 — Integração NXTINK

- Identificar origem de eventos (input/sysfs/service)
- Integrar ações do botão no framework/Settings
- Garantir configuração de atalhos pelo usuário

## Fase 4 — Estabilização

- Ajustes de SELinux e permissões
- Testes de regressão (energia, desempenho, câmera, sensores)
- Correção de falhas de suspend/wake e conflitos de input

## Fase 5 — Entrega

- Publicar guia de build e instalação
- Documentar limitações conhecidas
- Definir plano de manutenção e testes contínuos
