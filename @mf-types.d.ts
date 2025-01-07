
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/Mercury';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/Mercury' ? typeof import('REMOTE_ALIAS_IDENTIFIER/Mercury') :any;