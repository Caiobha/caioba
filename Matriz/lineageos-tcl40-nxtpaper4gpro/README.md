# Projeto: LineageOS para TCL 40 NXTPAPER 4G Pro

Este diretório organiza o projeto de engenharia reversa e port do LineageOS para o **TCL 40 NXTPAPER 4G Pro**, com foco em suporte às funções do botão **NXTINK**.

## Objetivos

- Estruturar o bring-up do aparelho no LineageOS
- Mapear e integrar eventos/ações do botão NXTINK
- Validar estabilidade dos componentes essenciais (boot, rádio, áudio, câmera, sensores)

## Estrutura inicial

- `ROADMAP.md`: fases e entregáveis do projeto
- `TWRP_MAGISK_BASE.md`: guia base de preparação e instalação

## Importante sobre apps com bloqueio de integridade

Apps que exigem ambiente totalmente íntegro (por exemplo, alguns apps governamentais, bancários ou corporativos) podem **não funcionar** com bootloader desbloqueado, recovery custom e root.

Este projeto **não inclui bypass de segurança, ocultação de root ou fraude de integridade**. O objetivo é manter compatibilidade dentro de práticas legítimas e de conformidade.
