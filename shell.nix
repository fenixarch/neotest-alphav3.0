{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_20
    nodePackages.yarn
    nodePackages.prisma
    openssl
    pkg-config
    python3
    gcc
    gnumake
  ];

  shellHook = ''
    export YARN_CACHE_FOLDER=$PWD/.yarn-cache
    export PATH=$PWD/node_modules/.bin:$PATH
    
    # Настройки для Prisma
    export PRISMA_QUERY_ENGINE_LIBRARY="${pkgs.prisma-engines}/lib/libquery_engine.node"
    export PRISMA_SCHEMA_ENGINE_BINARY="${pkgs.prisma-engines}/bin/schema-engine"
    export PRISMA_MIGRATION_ENGINE_BINARY="${pkgs.prisma-engines}/bin/migration-engine"
    export PRISMA_FMT_BINARY="${pkgs.prisma-engines}/bin/prisma-fmt"
    export PRISMA_CLI_QUERY_ENGINE_TYPE="library"
    
    export NEXT_TELEMETRY_DISABLED=1
  '';
}