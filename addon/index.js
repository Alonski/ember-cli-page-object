import { create }      from './create';                   export { create };
import { collection }  from './collection';               export { collection };
import { clickable }   from './-private/properties/clickable';        export { clickable };
import { clickOnText } from './-private/properties/click-on-text';    export { clickOnText };
import { fillable }    from './-private/properties/fillable';         export { fillable }; export const selectable = fillable;
import { visitable }   from './-private/properties/visitable';        export { visitable };
import { triggerable } from './-private/properties/triggerable';      export { triggerable };
import { contains }    from './-private/properties/contains';         export { contains };
import { hasClass }    from './-private/properties/has-class';        export { hasClass };
import { isHidden }    from './-private/properties/is-hidden';        export { isHidden };
import { isVisible }   from './-private/properties/is-visible';       export { isVisible };
import { notHasClass } from './-private/properties/not-has-class';    export { notHasClass };
import { attribute }   from './-private/properties/attribute';        export { attribute };
import { is }          from './queries/is';               export { is };
import { count }       from './-private/properties/count';            export { count };
import { property }    from './queries/property';         export { property };
import { text }        from './queries/text';             export { text };
import { value }       from './queries/value';            export { value };

export { buildSelector, findElementWithAssert, findElement, getContext } from './helpers';

export default {
  attribute,
  clickOnText,
  clickable,
  collection,
  contains,
  count,
  create,
  fillable,
  hasClass,
  is,
  isHidden,
  isVisible,
  notHasClass,
  property,
  selectable,
  text,
  value,
  visitable,
  triggerable
};
