import assert from "assert";
import { Widget } from ".";
import { Clip } from "../dart-ui/clip";
import { Axis } from "../painting/axis";
import { EdgeInsetsGeometry } from "../painting/edge-insets-geometry";
import { ScrollController } from "./scroll-controller";
import { DragStartBehavior } from "../gestures";
import { ScrollPhysics } from "./scroll-physics";
import { ScrollViewKeyboardDismissBehavior } from "./scroll-view-keyboard-dismiss-behavior";

/**
 * https://api.flutter.dev/flutter/widgets/SingleChildScrollView-class.html
 */
export class SingleChildScrollView extends Widget {
  scrollDirection?: Axis;
  reverse: boolean;
  padding?: EdgeInsetsGeometry;
  primary?: boolean;
  physics?: ScrollPhysics;
  controller?: ScrollController;
  child?: Widget;
  dragStartBehavior: DragStartBehavior;
  clipBehavior: Clip;
  restorationId?: string;
  keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior;

  /**
   * https://api.flutter.dev/flutter/widgets/SingleChildScrollView/SingleChildScrollView.html
   * @param args
   */
  constructor({
    scrollDirection = Axis.vertical as Axis,
    reverse = false,
    padding,
    primary,
    physics,
    controller,
    child,
    dragStartBehavior = DragStartBehavior.start,
    clipBehavior = Clip.hardEdge,
    restorationId,
    keyboardDismissBehavior = ScrollViewKeyboardDismissBehavior.manual,
  }: {
    scrollDirection?: Axis;
    reverse?: boolean;
    padding?: EdgeInsetsGeometry;
    primary?: boolean;
    physics?: ScrollPhysics;
    controller?: ScrollController;
    child?: Widget;
    dragStartBehavior?: DragStartBehavior;
    clipBehavior?: Clip;
    restorationId?: string;
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
  }) {
    super();
    assert(scrollDirection != null);
    assert(dragStartBehavior != null);
    assert(clipBehavior != null);
    assert(
      !(controller != null && primary == true),
      `Primary ScrollViews obtain their ScrollController via inheritance from a PrimaryScrollController widget. ` +
        "You cannot both set primary to true and pass an explicit controller."
    );
    //  primary = primary ?? controller == null && identical(scrollDirection, Axis.vertical),

    this.scrollDirection = scrollDirection;
    this.reverse = reverse;
    this.padding = padding;
    this.primary = primary;
    this.physics = physics;
    this.controller = controller;
    this.child = child;
    this.dragStartBehavior = dragStartBehavior;
    this.clipBehavior = clipBehavior;
    this.restorationId = restorationId;
    this.keyboardDismissBehavior = keyboardDismissBehavior;
  }
}
